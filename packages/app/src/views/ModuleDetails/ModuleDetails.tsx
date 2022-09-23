import React from "react";
import { makeStyles } from "@material-ui/core";
import { ModuleDetailHeader } from "./ModuleDetailHeader";
import { ModuleInteractions } from "./ModuleInteractions";
import { Module } from "../../store/modules/models";

interface ModuleDetailsProps {
  module: Module;
}

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(0, 2, 2, 2),
  },
}));

export const ModuleDetails = ({ module }: ModuleDetailsProps) => {
  const classes = useStyles();

  return (
    <>
      <ModuleDetailHeader module={module} />
      <div className={classes.content}>
        <ModuleInteractions key={module.address} module={module} />
      </div>
    </>
  );
};
