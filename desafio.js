        class Heroi{
            constructor(nome, idade, tipo){
                this.nome = nome;
                this.idade = idade;
                this.tipo = tipo;
            }

            atacar(){
                let ataque;
                if(this.tipo == "mago"){
                    ataque = "magia";
                } else if (this.tipo == "guerreiro"){
                    ataque = "espada";
                } else if (this.tipo == "monge"){
                    ataque = "artes marciais";
                } else if(this.tipo == "ninja"){
                    ataque = "shurikens";
                }

                return `O ${this.tipo} atacou usando ${ataque}`
            }

        }

        Feiticeiro = new Heroi("Orlok", "98", "mago");
        console.log(Feiticeiro.atacar());
        Pastor = new Heroi("Nascimento Freitas", "58", "monge");
        console.log(Pastor.atacar());
