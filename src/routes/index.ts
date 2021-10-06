import { Router } from "express";
import { userRoutes } from "./user.routes";
import { categoryRoutes } from "./category.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use(authenticateRoutes);

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/specification", specificationRoutes);

export { router }