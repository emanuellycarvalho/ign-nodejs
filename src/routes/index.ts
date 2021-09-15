import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use("/category", categoryRoutes);
router.use("/specification", specificationRoutes);

export { router }