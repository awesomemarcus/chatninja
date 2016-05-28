import moment from 'moment';

const formatDate = (date) => {
  return moment(date).calendar();
};

const previousPage = () => {
  return history.back();
}

module.exports = {
  formatDate,
  previousPage,
};
