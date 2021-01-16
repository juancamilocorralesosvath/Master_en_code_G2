//como es una libreria que instale, no pongo ninguna ruta sino su nombre.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {

    /* entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    }, */
    /* devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
            }, */
    module: { 
        rules: [ //las reglas van a cargar mis Loaders, que son los que necesito para que le digan a webpack que debe hacer
            {
                test: /\.html/, //mi atributo test me sirve para definir lo que tengo que buscar, una vez que defino que tengo que buscar, tengo que indicar como lo voy a usar
                use: [ //que voy a hacer con lo que encontre, para definir lo que queremos hacer, por lo general necesitamos instalar un loader
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.js$/, //va a buscar archivos de js
                exclude: /node_modules/,//significa que no va a realizar una busqueda en la carpeta node_modules, no lo hicimos anteriormente porque por lo general, en la carpeta de node_modules no se incluyen archivos .html
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.(png|jpg|svg|jpeg|gif)$/,
                use: ["file-loader"] //en la section de 'use', podemos pasarle un arreglo de objetos, un solo objeto, y, como en este caso, simplemente el nombre del loader que vamos a utilizar
              },
              {
                test: /\.scss$/, //va a buscar archivos de sass
                use: [ 'style-loader',//"style-loader" estilos en linea de css
                'css-loader', //maneja los archivos css que el sass-loader me envia
                'sass-loader', //procesa los archivos de sass
                ]
              },
        ]
    },
    plugins: [
        //el constructor del plugin me permite mandar los parametros de configuracion
        new HtmlWebpackPlugin({
            //aqui le decimos cual archivo queremos 
            template: "./src/index.html",
            //aqui le decimos como queremos que se llame el archivo que me devuelve.
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css" //de esta manera manejamos muchas lineas de codigo 
        }),
    ]
};