import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflowTypes";
import { BrainIcon } from "lucide-react";

export const ExtractDataWithAITask = {
    type: TaskType.EXTRACT_DATA_WITH_AI,
    label: "Extract data with AI",
    icon: (props) => {
        return <BrainIcon className="stroke-rose-400" {...props} />
    },
    isEntryPoint: false,
    inputs: [
        {
            name: "Content",
            type: TaskParamType.STRING,
            required: true,
        },
        {
            name: "Credentials",
            type: TaskParamType.CREDENTIAL,
            required: true,
        },
        {
            name: "Prompt",
            type: TaskParamType.STRING,
            required: true,
            variant: "textarea",
        }
    ] as const ,
    outputs: [{
        name: "Extracted data",
        type: TaskParamType.STRING,
    }] as const,
} satisfies WorkflowTask;