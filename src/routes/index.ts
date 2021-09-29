import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/category", categoryRoutes);
router.use("/specification", specificationRoutes);
router.use("/user", userRoutes);

export { router }