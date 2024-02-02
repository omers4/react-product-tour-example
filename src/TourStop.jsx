import React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { useTourStore } from "./tourStore";
import { cloneElement, useRef } from "react";
import Typography from "@mui/material/Typography";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Backdrop from "@mui/material/Backdrop";

export function TourStop({ id, children }) {
  const ref = useRef();
  const { getCurrent, next, skip, prev, isLast, isFirst, isStepActive } =
    useTourStore();
  const { content } = getCurrent();

  return (
    <>
      {cloneElement(children, {
        ref,
      })}
      <Backdrop open={isStepActive(id)}>
        <Popover
          id={id}
          open={isStepActive(id)}
          anchorEl={ref.current}
          onClose={() => {}}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div style={{ padding: 12 }}>
            <Typography component="div">{content}</Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button color="inherit" onClick={skip}>
                {isLast() ? "Close" : "Skip"}
              </Button>
              <div style={{ display: "flex", justifyContent: "end" }}>
                {!isFirst() && (
                  <Button color="secondary" onClick={prev}>
                    Previous
                  </Button>
                )}
                <Button color="primary" onClick={next}>
                  {isLast() ? "Done" : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </Popover>
      </Backdrop>
    </>
  );
}
