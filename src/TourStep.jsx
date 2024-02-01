import React from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { useTourStore } from "./tourStore";
import { cloneElement, useRef } from "react";
import Typography from "@mui/material/Typography";

export function TourStep({ id, open, children }) {
  const ref = useRef();
  const { getCurrent, next, skip, prev, isLast, isFirst } = useTourStore();
  const { content } = getCurrent();

  return (
    <>
      {cloneElement(children, {
        ref,
      })}
      <Popover
        id={id}
        open={open}
        anchorEl={ref.current}
        onClose={() => {}}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div style={{ padding: 12 }}>
          <Typography component="div">{content}</Typography>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button color="inherit" onClick={skip}>
              Skip
            </Button>
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
      </Popover>
    </>
  );
}
