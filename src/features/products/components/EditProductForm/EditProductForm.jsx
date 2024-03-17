import * as Yup from "yup";
import {
  StyledSubmitButton,
  StyledProductForm,
} from "../ProductForm/ProductForm.styled";
import { useFormik } from "formik";
import InputField from "../InputField/InputField";
import { useEffect, useState } from "react";

import rows from "../../row.json";
import { Link, useParams } from "react-router-dom";

const productSchema = Yup.object().shape({
  team: Yup.string().required("Team name is required"),
  item: Yup.string().required("required"),
  uom: Yup.string().required("required"),
  quality: Yup.string().required("required"),
});

const EditProductForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(function () {
    const target = rows.find((row) => row.id == id);
    setProduct(target);
  }, []);

  const initialValues = {
    item: product ? product.item : "",
    team: product ? product.team : "",
    uom: product ? product.uom : "",
    quality: product ? product.totalQuantity : "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: productSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    //   const updatedProduct = {
    //     ...product,
    //     team: values.team,
    //     item: values.item,
    //     uom: values.uom,
    //     quality: values.totalQuantity,
    //   };
    //   resetForm();
    },
  });

  return (
    <StyledProductForm onSubmit={formik.handleSubmit}>
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

      <StyledSubmitButton type="submit">Edit product</StyledSubmitButton>
    </StyledProductForm>
  );
};

export default EditProductForm;
