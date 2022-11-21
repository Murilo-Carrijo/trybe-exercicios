// Agora que você viu diferentes formas de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto pessoaEstudante = {}, como nome, email, telefone, github e linkedIn, usando os métodos aprendidos neste conteúdo.


const pessoaEstudante = {}

const addProperties = (obj, key, value) => {
	obj[key] = value;
};

addProperties(pessoaEstudante, 'nome', 'Murilo');
addProperties(pessoaEstudante, 'email', 'murilocarrijoadm@gmail.com');
addProperties(pessoaEstudante, 'telefone', '16993453032');
addProperties(pessoaEstudante, 'github', 'https://github.com/Murilo-Carrijo');
addProperties(pessoaEstudante, 'linkedIn', 'https://www.linkedin.com/in/murilo-carrijo/');

console.log(pessoaEstudante);