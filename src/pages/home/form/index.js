import React from "react";
import { FormControlLabel, RadioGroup } from "@material-ui/core";
import IconInput from "../../../components/icon-inputs";
import StyledRadio from "../../../components/styled-radio";
import { ButtonWrapper, Wrapper, InputsWrapper } from "./style";
import ImageSVG from "../../../assets/svg/Icon/Image";
import PlaceSVG from "../../../assets/svg/Icon/Place";
import DateSVG from "../../../assets/svg/Icon/Date";
import PersonSVG from "../../../assets/svg/Icon/Person";
import SearchSVG from "../../../assets/svg/Icon/Search";
import ColorButton from "../../../components/color-button";
import { useFormik } from "formik";
import * as Yup from "yup";
import DateInput from "../../../components/date-input";
import { connect } from "react-redux";
import { updateTripList } from "../../../redux/actions";

function Form(props) {
  const { addTrip } = props;

  const formik = useFormik({
    initialValues: {
      tripType: "roundTrip",
      origin: "",
      destiny: "",
      date: [new Date(), new Date()],
      personNumber: 0,
    },
    validationSchema: Yup.object().shape({
      tripType: Yup.string().required("Selecione uma opção."),
      origin: Yup.string().required("Campo obrigatório"),
      destiny: Yup.string().required("Campo obrigatório"),
      date: Yup.string().required("Campo obrigatório"),
      personNumber: Yup.number()
        .required("Campo obrigatório")
        .min(1, "O número mínimo de pessoas é 1"),
    }),
    onSubmit: (values) => {
      addTrip(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <RadioGroup row style={{ marginBottom: 10 }}>
          <FormControlLabel
            control={<StyledRadio />}
            value="roundTrip"
            label="Ida e volta"
            id="tripType"
            name="tripType"
            onChange={(event) => {
              formik.setFieldValue("date", [new Date(), new Date()]);
              formik.setFieldValue("tripType", event.target.value);
            }}
            onBlur={formik.handleBlur}
            checked={formik.values.tripType === "roundTrip"}
          />
          <FormControlLabel
            control={<StyledRadio />}
            value="going"
            label="Só Ida"
            id="tripType"
            name="tripType"
            onChange={(event) => {
              formik.setFieldValue("date", new Date());
              formik.setFieldValue("tripType", event.target.value);
            }}
            onBlur={formik.handleBlur}
          />
          <FormControlLabel
            control={<StyledRadio />}
            value="return"
            label="Só Volta"
            id="tripType"
            name="tripType"
            onChange={(event) => {
              formik.setFieldValue("date", new Date());
              formik.setFieldValue("tripType", event.target.value);
            }}
            onBlur={formik.handleBlur}
          />
        </RadioGroup>
        {formik.errors.tripType && formik.touched.tripType ? (
          <div>{formik.errors.tripType}</div>
        ) : null}
        <InputsWrapper>
          <IconInput
            id="origin"
            name="origin"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.origin}
            placeholder="Informe sua origem"
            Icon={ImageSVG}
            title="Origem"
            formik={formik}
          />
          <IconInput
            Icon={PlaceSVG}
            title="Destino"
            id="destiny"
            name="destiny"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.destiny}
            placeholder="Informe seu destino"
            formik={formik}
          />
          <DateInput
            Icon={DateSVG}
            onChange={(event) => {
              formik.setFieldValue("date", event);
            }}
            value={formik.values.date}
            formik={formik}
            rangeDate={formik.values.tripType}
          />
          <IconInput
            Icon={PersonSVG}
            title="Número de Pessoas"
            id="personNumber"
            name="personNumber"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.personNumber}
            placeholder="Informe o número de pessoas"
            formik={formik}
          />
        </InputsWrapper>
      </Wrapper>
      <ButtonWrapper>
        <ColorButton
          color="#667EEA"
          title="Busque as Viagens"
          Icon={SearchSVG}
        />
      </ButtonWrapper>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTrip: (trip) => dispatch(updateTripList(trip)),
});

export default connect(null, mapDispatchToProps)(React.memo(Form));
