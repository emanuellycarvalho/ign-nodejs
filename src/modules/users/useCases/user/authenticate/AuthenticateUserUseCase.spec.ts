import { AppError } from "@errors/AppError";
import { CreateUserUseCase } from "../create/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { UserRepositoryInMemory } from "@modules/users/repositories/in-memory/UserRepositoryInMemory";

let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryIM: UserRepositoryInMemory;

describe("Authenticate user", ()=> {
    beforeEach(() => {
        userRepositoryIM = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryIM);
        createUserUseCase = new CreateUserUseCase(userRepositoryIM);
    });

    it("Should be possible to create a token (authenticate an user)", async () => {
        const user: ICreateUserDTO = {
            name: "Test User",
            email: "teste@gmail.com",
            password: "1234",
            driver_license: "000123"
        }

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({ 
            email: user.email, 
            password: user.password 
        });

        expect(result).toHaveProperty("token");
    });

    it("Should not be able to authenticate an unexistent user", async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({ 
                email: "false@email.com", 
                password: "1235" 
            })
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: "Test User",
                email: "teste@gmail.com",
                password: "1234",
                driver_license: "000123"
            }
    
            await createUserUseCase.execute(user);
    
            await authenticateUserUseCase.execute({ 
                email: user.email, 
                password: "1235" 
            });
        }).rejects.toBeInstanceOf(AppError);

    });

});