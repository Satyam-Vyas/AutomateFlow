import { ExecutionEnvironment } from "@/types/executor";
import { FillInputTask } from "../task/FillInput";

export async function FillInputExecutor(
  environment: ExecutionEnvironment<typeof FillInputTask>
): Promise<boolean> {
    try {
        const selector = environment.getInput("Selector");
        if(!selector) {
            environment.log.error("Selector is not defined");
        }

        const value = environment.getInput("Selector");
        if(!value) {
            environment.log.error("input Value not defined");
        }

        await environment.getPage()!.type(selector, value);
        return true;
    } catch (error: any) {
        environment.log.error(error.message);
        return false;
    }
} 