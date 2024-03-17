import * as Yup from "yup";
import { StyledSubmitButton, StyledProductForm } from "./ProductForm.styled";
import { useFormik } from "formik";
import InputField from "../InputField/InputField";
import { useState } from "react";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Product name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Invalid Phone Number")
    .required("Phone number is required"),
  team: Yup.string().required("Team name is required"),
  item: Yup.string().required("required"),
  uom: Yup.string().required("required"),
  quality: Yup.string().required("required"),
});

const ProductForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      team: "",
      item: "",
      uom: "",
      quality: "",
    },
    validationSchema: productSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <StyledProductForm onSubmit={formik.handleSubmit}>
      <InputField
        label="Name"
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        {...formik.getFieldProps("name")}
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
      <InputField
        label="UOM"
        error={formik.touched.uom && Boolean(formik.errors.uom)}
        helperText={formik.touched.uom && formik.errors.uom}
        {...formik.getFieldProps("uom")}
      />
      <InputField
        label="Team"
        error={formik.touched.team && Boolean(formik.errors.team)}
        helperText={formik.touched.team && formik.errors.team}
        {...formik.getFieldProps("team")}
      />
      <InputField
        label="Item"
        error={formik.touched.item && Boolean(formik.errors.item)}
        helperText={formik.touched.item && formik.errors.item}
        {...formik.getFieldProps("item")}
      />
      <InputField
        label="Quality"
        error={formik.touched.quality && Boolean(formik.errors.quality)}
        helperText={formik.touched.quality && formik.errors.quality}
        {...formik.getFieldProps("quality")}
      />

      <StyledSubmitButton type="submit">Create product</StyledSubmitButton>
    </StyledProductForm>
  );
};

export default ProductForm;
