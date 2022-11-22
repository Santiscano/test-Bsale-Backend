import { getConnection } from "./../database/database.js";

const getCatergory = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name FROM `bsale_test`.`category`",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "Aqui te entrego las categorias",
                results
            })
        });
}

const getProducts = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name, url_image, price, discount, category FROM bsale_test.product",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "aqui te entrego todos los productos en con categoria: bebida energetica",
                results
            })
        });
}

const getProductsEnergy = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name, url_image, price, discount, category FROM bsale_test.product WHERE bsale_test.product.category= 1",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "aqui te entrego todos los productos en con categoria: bebida energetica",
                results
            })
        });
}

const getProductsPisco = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name, url_image, price, discount, category FROM bsale_test.product WHERE bsale_test.product.category= 2",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "aqui te entrego todos los productos en con categoria: pisco",
                results
            })
        });
}

const getProductsRon = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name, url_image, price, discount, category FROM bsale_test.product WHERE bsale_test.product.category= 3",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "aqui te entrego todos los productos en con categoria: Ron",
                results
            })
        });
}

const getProductsBeverage = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name, url_image, price, discount, category FROM bsale_test.product WHERE bsale_test.product.category= 4",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "aqui te entrego todos los productos en con categoria: Beverage",
                results
            })
        });
}

const getProductsSnack = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name, url_image, price, discount, category FROM bsale_test.product WHERE bsale_test.product.category= 5",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "aqui te entrego todos los productos en con categoria: snack",
                results
            })
        });
}

const getProductsBeer = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name, url_image, price, discount, category FROM bsale_test.product WHERE bsale_test.product.category= 6",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "aqui te entrego todos los productos en con categoria: Beer",
                results
            })
        });
}

const getProductsVodka = async (req,res) => {
    const connection= await getConnection();
    const responseDB = await connection.query("SELECT id, name, url_image, price, discount, category FROM bsale_test.product WHERE bsale_test.product.category= 7",
        (error,results,fields) => {
            if(error) {
                res.status(500);
                res.send(error.message);
                console.log('me rompi por aqui')
            };
            res.json({
                msg: "aqui te entrego todos los productos en con categoria: Vodka",
                results
            })
        });
}


export const methods = {
    getCatergory,
    getProducts,
    getProductsEnergy,
    getProductsPisco,
    getProductsRon,
    getProductsBeverage,
    getProductsSnack,
    getProductsBeer,
    getProductsVodka
};