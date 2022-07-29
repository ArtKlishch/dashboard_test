import { store } from "../redux/store";

export const findLabel = (option, labels) => {
  const result = labels.find((label) => label.labelKey === option);
  return result.title;
};

export const validateIntegerNumber = (str) => {
  let string = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (typeof +str[i] === "number") {
      string += str[i];
    }
  }
  return string;
};

export const timeValidate = (startTime, endTime, dayOfWeek) => {
  let isError = "";
  if (startTime > endTime) {
    isError = "End time can't be earlier, then start time.";
    return isError;
  }

  const { worklogs } = store.getState();
  const todaysWorkLogs = worklogs.filter(
    (item) => item.dayOfWeek === dayOfWeek
  );
  if (!todaysWorkLogs.length) {
    return isError;
  }

  const todayDateDay = new Date().getDay();
  const dayDiff = todayDateDay - dayOfWeek;
  const todayDate = new Date();
  const dateOfChange = new Date(
    todayDate.setDate(
      dayDiff <= 0
        ? todayDate.getDate() + dayDiff
        : todayDate.getDate() - dayDiff
    )
  );

  const startTimeValue = new Date(startTime);
  const startHours = startTimeValue.getHours();
  const startMinutes = startTimeValue.getMinutes();
  const startDateValue = new Date(
    dateOfChange.getFullYear(),
    dateOfChange.getMonth(),
    dateOfChange.getDate(),
    startHours,
    startMinutes
  );

  const endTimeValue = new Date(endTime);
  const endHours = endTimeValue.getHours();
  const endMinutes = endTimeValue.getMinutes();
  const endDateValue = new Date(
    dateOfChange.getFullYear(),
    dateOfChange.getMonth(),
    dateOfChange.getDate(),
    endHours,
    endMinutes
  );

  const setTimesData = todaysWorkLogs.map((item) => {
    const startTimeData = item.fromTime.split(":");
    const endTimeData = item.toTime.split(":");
    return {
      startTimeDate: new Date(
        dateOfChange.getFullYear(),
        dateOfChange.getMonth(),
        dateOfChange.getDate(),
        +startTimeData[0],
        +startTimeData[1]
      ),
      endTimeDate: new Date(
        dateOfChange.getFullYear(),
        dateOfChange.getMonth(),
        dateOfChange.getDate(),
        +endTimeData[0],
        +endTimeData[1]
      ),
    };
  });

  for (let i = 0; i <= setTimesData.length - 1; i++) {
    if (
      (setTimesData[i].startTimeDate < startDateValue &&
        setTimesData[i].endTimeDate > startDateValue) ||
      (setTimesData[i].startTimeDate > startDateValue &&
        setTimesData[i].startTimeData < endDateValue) ||
      (setTimesData[i].startTimeDate < startDateValue &&
        setTimesData[i].endTimeDate > endDateValue) ||
      (setTimesData[i].startTimeDate > startDateValue &&
        setTimesData[i].endTimeDate < endDateValue)
    ) {
      isError = "Your time can;t intersect with already chosen time";
      break;
    }
  }

  return isError;
};
