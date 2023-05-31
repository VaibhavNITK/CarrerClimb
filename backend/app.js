import express from "express";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import companyRouter from "./routes/company.js";
import pocRouter from "./routes/poc.js";
import linkRouter from "./routes/link.js";
import skillRouter from "./routes/skills.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import { isAuthenticated } from "./middlewares/auth.js";
import cors from "cors";
import multer from "multer";
import { File } from "./models/file.js";
config({
  path: "./data/config.env",
});

export const app = express();

// Configure Multer storage for resume uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000', methods: ["GET", "POST", "PUT", "DELETE"] }));

// Resume upload endpoint
app.post('/api/v1/resume/upload', isAuthenticated, upload.single('resume'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { filename, path } = req.file;
  const id = req.user._id;

  try {
    const existingFile = await File.findOne({ uploaderId: id });

    if (existingFile) {
      // If a resume already exists for the user, return an error
      return res.status(400).json({ message: 'Resume already exists for this user' });
    }

    const file = new File({
      filename,
      uploaderId: id,
      path,
    });

    await file.save();

    res.json({ message: 'Resume uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to upload resume' });
  }
});


app.get('/api/v1/resume/:userId', (req, res) => {
  const userId = req.params.userId;

  File.findOne({ uploaderId: userId })
    .then((file) => {
      if (!file) {
        return res.status(404).json({ message: 'Resume not found' });
      }

      const filePath = file.path;
      res.sendFile(filePath);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve resume' });
    });
});


// Using routes
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/poc", pocRouter);
app.use("/api/v1/link", linkRouter);
app.use("/api/v1/skills", skillRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);

