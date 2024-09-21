function inicio() {
    const PASS = 2678;
    var user = prompt('Digite seu User');
    let verify_pass = parseInt(prompt('Digite sua senha'));
    if (verify_pass === PASS){
        alert(`Bem vindo ao Hotel Oak Green, ${user}. É um imenso prazer ter você por aqui`);
        let escolha = parseInt(prompt('Selecione uma opção\n1.) Reserva de Quartos\n2.) Cadastro de Hóspedes\n3.) Abastecimento de Carros\n4.) Cadastro 15max|Pesquisa|Listagem\n5.) Sair'));
    
        if (escolha === 1) {
            reserva_quartos();
        } else if (escolha === 2) {
            cadastro_hospedes();
        } else if (escolha === 3) {
            abastecer_carros();
        } else if (escolha === 4) {
            cadastro_pesquisa_listagem();
        } else if (escolha === 5) {
            sair();
        } else {
            erro();
        }

    } else {
        alert('Senha incorreta');
        inicio();
    }
    
    
}

function reserva_quartos() {
    alert('HOTEL Oak Green - RESERVA DE QUARTOS');

    var quartos = [
        ['quarto1', 'livre'],
        ['quarto2', 'livre'],
        ['quarto3', 'livre'],
        ['quarto4', 'livre'],
        ['quarto5', 'livre'],
        ['quarto6', 'livre'],
        ['quarto7', 'livre'],
        ['quarto8', 'livre'],
        ['quarto9', 'livre'],
        ['quarto10', 'livre'],
        ['quarto11', 'livre'],
        ['quarto12', 'livre'],
        ['quarto13', 'livre'],
        ['quarto14', 'livre'],
        ['quarto15', 'livre'],
        ['quarto16', 'livre'],
        ['quarto17', 'livre'],
        ['quarto18', 'livre'],
        ['quarto19', 'livre'],
        ['quarto20', 'livre'],
    ]
    const valor_diaria = 50;
    let qntd_de_dias_hospedagem = parseInt(prompt('Quantas diárias serão necessárias?'));
    if (isNaN(qntd_de_dias_hospedagem) || qntd_de_dias_hospedagem <= 0){
        alert('Valor Inválido');
        inicio();
    } else if (qntd_de_dias_hospedagem > 30){
        alert('Quantidade acima de 30 não é permitida');
        inicio();
    } else{
        let nome_hospede = prompt('Insira o nome do Hospede');
        alert(quartos);
        while(true){
            let numero_quarto = parseInt(prompt('Qual o número do quarto? (1 - 20)')) - 1;
            if (isNaN(numero_quarto) || numero_quarto < 0 || numero_quarto > 20){
                alert('Valor Inválido');
                //volta pro WHILE
            } else {
                if (quartos[numero_quarto][1] === 'ocupado'){
                    alert('Quarto já está ocupado');
                    //volta pro WHILE
                } else {
                    //quarto livre
                    let confirma = prompt(`${user}, você confirma a hospedagem para ${nome_hospede} por ${qntd_de_dias_hospedagem} dias para o quarto ${numero_quarto} por R$${numero_quarto * valor_diaria}? S/N`).toLowerCase();

                    if (confirma === 'n'){
                        alert('Reserva cancelada');
                        break;
                    } else {
                        // reserva confirmada
                        quartos[numero_quarto][1] = 'ocupado';
                        alert(`${user}, reserva efetuada para ${nome_hospede}`);
                        alert(quartos);
                        break;
                    }
                }
            }
            
        }
        
    }
    inicio();
}

function cadastro_hospedes() {
    alert('HOTEL Oak Green - CADASTRO DE HÓSPEDES');

    let listaHospedes = [
        // {'Hospede':'nome_hospede', 'idade':70, 'Tipo_Pagamento':'Normal', 'Valor_a_ser_pago':'valor_diaria'},
    ]


    while(true){
        let nome_hospede = prompt('Insira o nome do hospede');
        if (nome_hospede === 'PARE'){
            break; //saindo do WHILE
        } else {
            let idade_hospede = parseInt(prompt('Insira a idade do hospede'));
            if (isNaN(idade_hospede) || idade_hospede < 0){
                alert('Idade invalida');
            } else if (idade_hospede <= 6){
                //paga nada
                listaHospedes.push({'Hospede':`${nome_hospede}`, 'Idade':`${idade_hospede}`, 'Tipo_Pagamento':'Gratuito', 'Valor_a_ser_pago':(valor_diaria - valor_diaria)});
            } else if (idade_hospede >= 60){
                //paga metade
                listaHospedes.push({'Hospede':`${nome_hospede}`, 'Idade':`${idade_hospede}`, 'Tipo_Pagamento':'Meia', 'Valor_a_ser_pago':(valor_diaria / 2)});
            } else {
                //paga normal
                listaHospedes.push({'Hospede':`${nome_hospede}`, 'Idade':`${idade_hospede}`, 'Tipo_Pagamento':'Normal', 'Valor_a_ser_pago':(valor_diaria - 0)});
            }
        }
    }
    let valor_total = 0;
    for (hospede of listaHospedes){
        valor_total += hospede.Valor_a_ser_pago;
    }

    let meia_total = 0;
    for (hospede of listaHospedes){
        if (hospede.Tipo_Pagamento === 'Meia'){
            meia_total++;
        }
    }

    let gratuidade_total = 0;
    for (hospede of listaHospedes){
        if (hospede.Tipo_Pagamento === 'Gratuito'){
            gratuidade_total++;
        }
    }
    alert(`${user}, o valor total das hospedagens é: R$${valor_total}; ${gratuidade_total} gratuidade(s); ${meia_total} meia(s)`);
    inicio();
}

function cadastro_pesquisa_listagem(){
    alert('HOTEL Oak Green - CADASTRO|PESQUISA|LISTAGEM');

    let listaHospedes = [
        // {'Hospede':'nome_hospede', 'idade':70, 'Tipo_Pagamento':'Normal', 'Valor_a_ser_pago':'valor_diaria'},
    ]
    let escolha = parseInt(prompt('Selecione uma opção\n1.) Cadastrar (max-15)\n2.) Pesquisar\n3.) Listar\n4.) Sair'));
    
    if (escolha === 1) {
        //cadastro hospedes até 15
        for(let i = 1; i > 15; i++){
            let nome_hospede = prompt('Insira o nome do hospede');
            if (nome_hospede === 'PARE'){
                break; //saindo do FOR
            } else {
                let idade_hospede = parseInt(prompt('Insira a idade do hospede'));
                if (isNaN(idade_hospede) || idade_hospede < 0){
                    alert('Idade invalida');
                } else if (idade_hospede <= 6){
                    //paga nada
                    listaHospedes.push({'Hospede':`${nome_hospede}`, 'Idade':`${idade_hospede}`, 'Tipo_Pagamento':'Gratuito', 'Valor_a_ser_pago':(valor_diaria - valor_diaria)});
                } else if (idade_hospede >= 60){
                    //paga metade
                    listaHospedes.push({'Hospede':`${nome_hospede}`, 'Idade':`${idade_hospede}`, 'Tipo_Pagamento':'Meia', 'Valor_a_ser_pago':(valor_diaria / 2)});
                } else {
                    //paga normal
                    listaHospedes.push({'Hospede':`${nome_hospede}`, 'Idade':`${idade_hospede}`, 'Tipo_Pagamento':'Normal', 'Valor_a_ser_pago':(valor_diaria - 0)});
                }
            }
        }
        alert('Limite maáximo atingido, ou você escolheu sair');

        } else if (escolha === 2) {
            //pesquisa hospedes
            let nome_hospede = prompt('Insira o nome do hospede');
            for (person of listaHospedes){
                if (person.Hospede === nome_hospede){
                    alert(`Hóspede ${nome_hospede} foi encontrada(o)!`);
                }
            }
            cadastro_pesquisa_listagem();

        } else if (escolha === 3) {
            //listar hospedes
            alert(listaHospedes);

        } else if (escolha === 4) {
            inicio();
        }else{
            erro();
        }
}

function gerenciamento_eventos(){
    alert('HOTEL Oak Green - GERENCIAMENTO DE EVENTOS');
    
    let detalhes_evento = [
        //{'Numero_de_Convidados':numero_convidados, 'Auditorio':auditorio_usado, 'Dia_da_Semana':dia_semana, 'Horario':horario, 'Horas_de_Evento':horas_de_evento, 'Nome_Empresa':nome_empresa, 'Custo_Garcom':custo_de_garcom_total, 'Custo_Buffet':custo_buffet_total, 'Valor_Total':(custo_de_garcom_total + custo_buffet_total)}
    ]

    //NUMERO DE CONVIDADOS
    while(true){
        let numero_convidados = parseInt(prompt('Insira o numero de convidados'));
        if (isNaN(numero_convidados) || numero_convidados < 0){
            alert('Número de convidados inválido');
            //voltar pro while
        } else if (numero_convidados > 350){
            alert('Quantidade de convidados superior à capacidade máxima')
            //voltar pro while
        } else {
            break; //sair do while
        }
    }

    //SELEÇÃO DE AUDITORIO
    if (numero_convidados > 220){//auditorio corolido
        let auditorio_usado = 'Auditório Corolido';
        alert('Use o auditório Colorado');
    } else if (numero_convidados > 150){
        let auditorio_usado = 'Auditório Naranja';
        alert(`Use o auditório Naranja (inclua mais ${(numero_convidados - 150)} cadeiras)`)
    } else {
        let auditorio_usado = 'Auditório Naranja';
        alert('Use o auditório Naranja')
    }

    //AGENDAMENTO
    let dia_semana = prompt('Insira o dia da semana para o agendamento');
    if (dia_semana === 'sabado' || dia_semana === 'domingo'){
        while(true){
            let horario = parseInt(prompt('Insira o Horário (7h - 15h)'));
            if (isNaN(horario) || horario < 7 || horario > 15){
                alert('Horário inválido');
                //voltar pro while
            } else {
                break; //sair do while
            }
        }
    } else {
        while(true){
            let horario = parseInt(prompt('Insira o Horário (7h - 23h)'));
            if (isNaN(horario) || horario < 7 || horario > 23){
                alert('Horário inválido');
                //voltar pro while
            } else {
                break; //sair do while
            }
        }
    }

    //NOME DA EMPRESA
    let nome_empresa = prompt('Insira o nome da empresa');
    alert(`Auditório reservado para ${nome_empresa}: ${dia_semana} às ${horario}hs`)

    //QUANTOS VAI TRAMPAR?
    let horas_de_evento = parseInt(prompt('Insira quantas Horas o evento vai durar'));
    let garcons = Math.ceil(numero_convidados / 12); //quantidade de garçons
    let garcons_extras = Math.floor(horas_de_evento / 2);
    let total_garcons = garcons + garcons_extras;
    let valor_garcom = 10.50;
    let custo_de_garcom_total = total_garcons * horas_de_evento * valor_garcom;

    //BUFFET
    let litros_cafe = 0.2 * numero_convidados;
    let litros_agua = 0.5 * numero_convidados;
    let qntd_salgados = 7 * numero_convidados;
    let custo_cafe = litros_cafe * 0.80;
    let custo_agua = litros_agua * 0.40;
    let custo_salgados = (qntd_salgados / 100) * 34.00;
    let custo_buffet_total = custo_cafe + custo_agua + custo_salgados;

    //ADD DETALHES NA LISTA
    detalhes_evento.push({'Numero_de_Convidados':numero_convidados, 'Auditorio':auditorio_usado, 'Dia_da_Semana':dia_semana, 'Horario':horario, 'Horas_de_Evento':horas_de_evento, 'Nome_Empresa':nome_empresa, 'Quantidade_Garcons':total_garcons, 'Custo_Garcom':custo_de_garcom_total, 'Custo_Buffet':custo_buffet_total, 'Valor_Total':(custo_de_garcom_total + custo_buffet_total)});

    alert(`RESUMO DO EVENTO
        Auditório: ${detalhes_evento[0].Auditorio}.
        Nome da empresa: ${detalhes_evento[0].Nome_Empresa}.
        Data: ${detalhes_evento[0].Dia_da_Semana}, ${detalhes_evento[0].Horario}h ~ ${( detalhes_evento[0].Horario - detalhes_evento[0].Horas_de_Evento )}h.
        Duração do evento: ${detalhes_evento[0].Horas_de_Evento}h.
        Quantidade de garçons: ${detalhes_evento[0].Quantidade_Garcons}.
        Quantidade de convidados: ${detalhes_evento[0].Numero_de_Convidados}.

        Custo dos garçons: R$${detalhes_evento[0].Custo_Garcom}
        Custo do buffet: R$${detalhes_evento[0].Custo_Buffet}

        Valor total do evento: R$${detalhes_evento[0].Valor_Total}`); //caso futuramente seja necessario mudar os indices (ALTERAR)

    let confirma = prompt('Gostaria de efetuar a reserva? S/N').toLowerCase();
    if (confirma === 'n'){
        detalhes_evento.pop(); //para remover da lista o ultimo evento
    } else {
        alert(`${user}, reserva efetuada com sucesso.`);
    }

    inicio();
}

function abastecer_carros() {
    alert('HOTEL Oak Green - ABASTECER');

    let wayneOilAlcool = parseFloat(prompt('Qual o valor do álcool no posto Wayne Oil?')).toLowerCase();
    let wayneOilGasolina = parseFloat(prompt('Qual o valor da gasolina no posto Wayne Oil?')).toLowerCase();
    let starkPetrolAlcool = parseFloat(prompt('Qual o valor do álcool no posto Stark Petrol?')).toLowerCase();
    let starkPetrolGasolina = parseFloat(prompt('Qual o valor da gasolina no posto Stark Petrol?')).toLowerCase();

    const limiteAlcool = 0.7; // Álcool deve ser 30% mais barato que a gasolina para ser melhor

    let combustivelWayne = 'gasolina';
    if (wayneOilAlcool / wayneOilGasolina <= limiteAlcool) {
        combustivelWayne = 'alcool';
    }

    let combustivelStark = 'gasolina';
    if (starkPetrolAlcool / starkPetrolGasolina <= limiteAlcool) {
        combustivelStark = 'alcool';
    }

    const custoWayne = (combustivelWayne === 'alcool') ? wayneOilAlcool * 42 : wayneOilGasolina * 42; //? retorna se for TRUE | : retorna se for FALSE
    const custoStark = (combustivelStark === 'alcool') ? starkPetrolAlcool * 42 : starkPetrolGasolina * 42; //? retorna se for TRUE | : retorna se for FALSE

    let resultado = '';
    if (custoWayne < custoStark) {
        resultado = `É mais barato abastecer com ${combustivelWayne} no posto Wayne Oil.`;
    } else if (custoStark < custoWayne) {
        resultado = `É mais barato abastecer com ${combustivelStark} no posto Stark Petrol.`;
    } else {
        resultado = 'Os preços são iguais nos dois postos.';
    }

    alert(`${user} ${resultado}`)

    inicio();
}

function manutencao() {
    let menorValor = null;
    let empresaMenorValor = '';
    let continuar = 'S';

    while (continuar.toUpperCase() === 'S') {
        let nomeEmpresa = prompt('Insira o nome da empresa');
        let valorAparelho = parseFloat(prompt('Insira o valor por aparelho'));
        let quantidadeAparelho = parseInt(prompt('Insira a quantidade de aparelhos'));
        let desconto = parseFloat(prompt('Insira o valor do desconto'));
        let quantidadeMinima = parseInt(prompt('Insira a quantidade minima para o desconto'));

        let valorTotal = valorAparelho * quantidadeAparelho;

        let valorManutencao;
        if (quantidadeAparelho >= quantidadeMinima) {
            let valorDesconto = (valorTotal * desconto) / 100;
            valorManutencao = valorTotal - valorDesconto;
        } else {
            valorManutencao = valorTotal;
        }

        alert(`O serviço da ${nomeEmpresa} custará R$${valorManutencao.toFixed(2)}`);

        if (menorValor === null || valorManutencao < menorValor) {
            menorValor = valorManutencao;
            empresaMenorValor = nomeEmpresa;
        }
        continuar = prompt('Deseja informar novos dados? (S/N)').toUpperCase();
    }
    alert(`O orçamento de menor valor é o de ${empresaMenorValor} por R$${menorValor.toFixed(2)}`);

    inicio();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 5');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo, ${user}`)
        window.close();
    } else {
        inicio();
    }
}

inicio();