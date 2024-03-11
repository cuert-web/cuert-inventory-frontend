import * as Yup from "yup";
import { StyledSubmitButton, StyledSupplierForm } from "./SupplierForm.styled";
import { useFormik } from "formik";
import InputField from "../InputField/InputField";

// executerName, supplierName, email, phone
const supplierSchema = Yup.object().shape({
  supplierName: Yup.string().required("Supplier name is required"),
  executerName: Yup.string().required("Executer name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const SupplierForm = () => {
  const formik = useFormik({
    initialValues: {
      executerName: "",
      supplierName: "",
      email: "",
      phone: "",
    },
    validationSchema: supplierSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledSupplierForm onSubmit={formik.handleSubmit}>
      <InputField
        label="Name of Supplier"
        error={
          formik.touched.supplierName && Boolean(formik.errors.supplierName)
        }
        helperText={formik.touched.supplierName && formik.errors.supplierName}
        {...formik.getFieldProps("supplierName")}
      />
      <InputField
        label="Name of Executer"
        error={
          formik.touched.executerName && Boolean(formik.errors.executerName)
        }
        helperText={formik.touched.executerName && formik.errors.executerName}
        {...formik.getFieldProps("executerName")}
      />

      <InputField
        label="Email"
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        {...formik.getFieldProps("email")}
      />
      <InputField
        label="Phone"
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        {...formik.getFieldProps("phone")}
      />

      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </StyledSupplierForm>
  );
};

export default SupplierForm;
