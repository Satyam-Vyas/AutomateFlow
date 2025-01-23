import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflowTypes";
import { FileJson2Icon } from "lucide-react";

export const ReadPropertyFromJsonTask = {
    type: TaskType.READ_PROPERTY_FROM_JSON,
    label: "Read property from JSON",
    icon: (props) => {
        return <FileJson2Icon className="stroke-orange-400" {...props} />
    },
    isEntryPoint: false,
    inputs: [
        {
            name: "JSON",
            type: TaskParamType.STRING,
            required: true,
        },
        {
            name: "Property name",
            type: TaskParamType.STRING,
            required: true,
        }
    ] as const ,
    outputs: [{
        name: "Property value",
        type: TaskParamType.STRING,
    }] as const,
} satisfies WorkflowTask;