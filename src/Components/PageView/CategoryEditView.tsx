import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useParams, useHistory } from "react-router-dom";

import { CategoryEditFormController } from "Components/FormController/CategoryEditFormController";
import { FormTextField } from "../Forms/FormTextField";
import { FormSkeleton } from "Components/Skeleton/FormSkeleton";
import { DrawerDialog } from "Components/Dialog/DrawerDialog";
import { DashboardLayout } from "Components/Layouts/DashboardLayout";

type EditFormProps = {
  handleSubmit: any;
  submitting: boolean;
  loading: boolean;
  open: boolean;
  onClose: any;
};

const CategoryEditFormDrawer = reduxForm({
  form: "Category_Edit_Form",
})(({ handleSubmit, submitting, loading, open, onClose }) => {
  return (
    <DrawerDialog
      open={open}
      title="Edit Category"
      onClose={onClose}
      onSubmit={handleSubmit}
      submitting={submitting}
      submitLabel="Edit">
      {loading ? (
        <FormSkeleton fieldCount={2} />
      ) : (
        <>
          <Field
            name="name"
            component={FormTextField}
            fullWidth
            variant="outlined"
            label="Category Name"
            margin="normal"
          />
          <Field
            name="abbr"
            component={FormTextField}
            type="text"
            fullWidth
            variant="outlined"
            label="Abbreviation"
            margin="normal"
          />
        </>
      )}
    </DrawerDialog>
  );
});

interface IParams {
  id: string;
}

export const CategoryEditView: React.FC = () => {
  const { id } = useParams<IParams>();
  const [open, setOpen] = useState<boolean>(true);
  const history = useHistory();

  const onClose = () => {
    setOpen(false);
    history.push("/categoryList");
  };

  return (
    <DashboardLayout>
      <CategoryEditFormController categoryId={id}>
        {(props: any) => (
          <CategoryEditFormDrawer {...props} open={open} onClose={onClose} />
        )}
      </CategoryEditFormController>
    </DashboardLayout>
  );
};
