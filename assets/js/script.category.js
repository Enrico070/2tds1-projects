class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product{
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name){
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }

    getCategoryById(id){
        return this.categories.find((category) => category.id == id);
    }
    
    updateCategory(id, name){
        const category = this.getCategoryById(id);
        category.name = name;
    }

    deleteCategory(id){
        const category = this.getCategoryById(id)
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1);
    }
}

class ProductService{
   constructor(){
    this.products = [];
    this.nextProductId = 1;
   }

   addProduct(name , price, category){
   const id = this.nextProductId;
   this.nextProductId++;

   const product = new Product(id, name, price, category);
   this.products.push(product);
   category.products.push(product);
   }
}

const categoriesList = new CategoryService();
const productsList = new ProductService();


function createCategory(){
const categoriesName1 = "candies";
const categoriesName2 = "shoes";
const categoriesName3 = "books";


categoriesList.addCategory(categoriesName1);
categoriesList.addCategory(categoriesName2);
categoriesList.addCategory(categoriesName3);

// console.log(categoriesList.categories);

console.log("Categorias criadas");


}


function createProduct(){
    const productName = "Choco";
    const productPrice = 0.5;
    const productCategory = categoriesList.categories[0];


    productsList.addProduct(productName, productPrice, productCategory);

    // console.log( productsList.products);
}


function findCategory(id) {
    const category = categoriesList.getCategoryById(id);

    //console.log(category.name);
}



function editCategory(id, name) {
    categoriesList.updateCategory(id, name);

    console.log(categoriesList.categories)
}


function deleteCategory(id) {
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories)
}