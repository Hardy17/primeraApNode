const {multiplicar, listarTabla}= require('./multiplicar/multiplicar');

const argv= require('./config/yargs').argv;
const colors=require('colors');
let comando =argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
        .then(lista=>console.log(lista))
        .catch(err=>console.log(err));
    break

    case 'crear':
         multiplicar(argv.base,argv.limite)
         .then(archivo=> console.log(`Archivo creado:`,colors.green(archivo)))
         .catch(err=>console.log(err));

    break

   default:
        console.log('Comando no exite men');
    break
}




