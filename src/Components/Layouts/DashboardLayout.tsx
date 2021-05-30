// import * as React, { useEffect } from "react";
import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setTitle } from "Redux/Title/ActionCreator";
import * as Redux from "redux";
import { StepConnector, StyledProps } from "@material-ui/core";
import actions from "redux-form/lib/actions";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiPaper-root": {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    "& .MuiTableCell-head": {
      fontWeight: 600,
    },
  },
  container: {
    padding: (props: any) =>
      props.fullWidth ? "0 !important" : theme.spacing(4),
    maxWidth: (props: any) => props.fullWidth && "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "16px !important",
    },
  },
}));

interface StyleProps {
  fullWidth: boolean;
}

interface DispatchProps {
  setTitle: (title: string) => void;
}

interface IProps extends DispatchProps {
  children: React.ReactChild | React.ReactFragment;
  maxWidth?: "lg" | "xs" | "sm" | "md" | "xl";
  fullWidth?: boolean;
  title: string;
}

// const mapDispatchToProps = (dispatch: React.Dispatch<any>): DispatchProps => ({
//   setTitle: () => dispatch({ type: "SET_TITLE" }),
// });

const mapDispatchToProps = ({ setTitle }: any): DispatchProps => ({
  setTitle,
});

const DashboardLayoutController = (props: IProps): JSX.Element => {
  const { setTitle, children, maxWidth, fullWidth, title } = props;
  const classes = useStyles({ fullWidth } as StyleProps);

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <div className={classes.root}>
      <Container
        maxWidth={maxWidth ? maxWidth : "lg"}
        className={classes.container}>
        {children}
      </Container>
    </div>
  );
};

export const DashboardLayout = connect(
  null,
  mapDispatchToProps
)(DashboardLayoutController);
