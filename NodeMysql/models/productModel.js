module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
      name: {
        type: DataTypes.STRING
        
      },
      description: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.STRING
  
      },
      price: {
        type: DataTypes.INTEGER
      },
      
      createdOn: {
        type: DataTypes.DATE
      },
      lastUpdatedOn: {
        type: DataTypes.DATE
      },
    });
    return Product;
  };
  