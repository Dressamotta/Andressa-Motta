


nome = 'joão'
idade = 25
print(nome,idade)

a = 10
b = 5
print("Soma:", a + b)
print("Subtração:", a - b)
print("Multiplicação:", a * b)
print("Divisão", a / b)

primeiro_nome = "Maria"
sobrenome = "Silva"
nome_completo = primeiro_nome + " " + sobrenome
print(nome_completo)

x = 15
y = 20
print("x é maior que y?", x > y)
print("x é igual a y?", x == y)
print("x é menor que y?", x < y)

tem_carteira = True
idade = 18
tem_carro = false 
pode_dirigir = idade >= 18 and tem_carteira
print("Pode dirigir?", pode_dirigir)
print("Pode dirigir e tem carro?", pode_dirigir and tem_carro)

a = 10
b = 20
c = 30
media = (a + b + c) / 3
print("Média:" , media)
print("A média é maior que 15 e menor que 25?" , 15 < media < 25)

nota = 75
if nota >= 60:
    print("Aprovado")
elif nota > 40:
    print("Recuperação")
else:
    print("Reprovado")

    dia_da_semana = 3
    dias = {
        1: "Domingo:",
        2: "Segunda:",
        3: "Terça",
        4: "Quarta",
        5: "Quinta",
        6: "Sexta",
        7: "Sábado"
    }
    print(dias[2])



