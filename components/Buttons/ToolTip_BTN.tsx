import { NextPage } from "next";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  childElement: any;
  btnClassName?: string;
  ToolTipName: string;
  ToolTipClassName?: string;
}

const ToolTip_BTN: NextPage<Props> = ({
  childElement,
  btnClassName,
  ToolTipName,
  ToolTipClassName,
}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className={`${btnClassName}`}>
            <div>{childElement}</div>
          </TooltipTrigger>
          <TooltipContent
            className={`border bg-gray-100 font-medium text-gray-900 ${ToolTipClassName} `}
          >
            <p> {ToolTipName}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default ToolTip_BTN;
