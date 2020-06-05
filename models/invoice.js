'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    invoice_number: DataTypes.INTEGER,
    total: DataTypes.NUMERIC,
    currency: DataTypes.STRING,
    invoice_date: DataTypes.DATE,
    due_date: DataTypes.DATE
  }, {});
  Invoice.associate = function(models) {
    // associations can be defined here
  };
  return Invoice;
};