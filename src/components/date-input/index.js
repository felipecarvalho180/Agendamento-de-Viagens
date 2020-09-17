import React, { useState } from "react";

import IconInput from "../icon-inputs";
import DateSVG from "../../assets/svg/Icon/Date";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import DatePicker from "react-date-picker";

function DateInput(props) {
  const { value, formik, onChange, rangeDate } = props;

  const [calendarShow, setCalendarShow] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div onClick={() => setCalendarShow(true)}>
        <IconInput
          Icon={DateSVG}
          title={
            rangeDate === "roundTrip"
              ? "Data de Ida / Retorno"
              : rangeDate === "going"
              ? "Data de Ida"
              : "Data de Retorno"
          }
          id="date"
          name="date"
          value={
            rangeDate === "roundTrip"
              ? `${value[0].toLocaleDateString()} - ${value[1].toLocaleDateString()}`
              : `${value.toLocaleDateString()}`
          }
          placeholder="Informe a(s) data(s)"
          formik={formik}
        />
      </div>
      {calendarShow && rangeDate === "roundTrip" && (
        <DateRangePicker
          id="date"
          name="date"
          isOpen={calendarShow}
          onChange={onChange}
          value={value}
          style={{ border: "solid 1px #fff" }}
          format="dd/M/y"
          onCalendarClose={() => setCalendarShow(false)}
          clearIcon={null}
        />
      )}
      {calendarShow && rangeDate !== "roundTrip" && (
        <DatePicker
          id="date"
          name="date"
          isOpen={calendarShow}
          onChange={onChange}
          value={value}
          style={{ border: "solid 1px #fff" }}
          format="dd/M/y"
          onCalendarClose={() => setCalendarShow(false)}
          clearIcon={null}
        />
      )}
    </div>
  );
}

export default DateInput;
