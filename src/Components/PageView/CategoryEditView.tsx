import React, { useState } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { useParams, useHistory } from "react-router-dom";

import { CategoryEditFormController } from "Components/FormController/CategoryEditFormController";
import { FormTextField } from "../Forms/FormTextField";
import { FormSkeleton } from "Components/Skeleton/FormSkeleton";
import { DrawerDialog } from "Components/Dialog/DrawerDialog";
import { DashboardLayout } from "Components/Layouts/DashboardLayout";

interface IReduxFormData {
  name: string;
  abbr: string;
}

type InjectedProps = InjectedFormProps<IReduxFormData>;

interface IProps extends InjectedProps {
  loading: boolean;
  open: boolean;
  onClose: any;
}

const CategoryEditFormDrawerController = (props: IProps) => {
  const { handleSubmit, submitting, loading, open, onClose } = props;
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
};

const CategoryEditFormDrawer = reduxForm<IReduxFormData, IProps>({
  form: "Category_Edit_Form",
})(CategoryEditFormDrawerController);

export const CategoryEditView = () => {
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState<boolean>(true);
  const history = useHistory();

  const onClose = () => {
    setOpen(false);
    history.push("/categoryList");
  };

  return (
    <DashboardLayout title="Category Edit">
      <CategoryEditFormController categoryId={id}>
        {(props: any) => (
          <CategoryEditFormDrawer {...props} open={open} onClose={onClose} />
        )}
      </CategoryEditFormController>
    </DashboardLayout>
  );
};
