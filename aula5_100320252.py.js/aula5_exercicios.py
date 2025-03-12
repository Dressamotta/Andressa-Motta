preco = 150
desconto = 20
preco_desconto = preco - desconto
print(preco_desconto)

peso = 70
altura = 1.75
imc = peso / (altura**2) 
print(imc)

idade = 22
tempo_experiencia = True

Eligível = idade >= 18 and tempo_experiencia 
print("eligível")

nivel_acesso = int(input("Digite o seu nível de acesso: "))

if nivel_acesso == 3:
    print("Acesso total")
elif nivel_acesso == 2:
    print("Acesso parcial")
elif nivel_acesso == 1:
    print("Acesso restrito")
else:
    print("Digite o código válido")

celsius = float(input("digite uma temperatura: "))
fahrenheit = (celsius * 9/5) + 32
print(fahrenheit)

valor = int(input("Digite um valor: "))
if valor %2 == 0:
    print("O número é par")
else:
    print("O número é ímpar")
print("valor")

peso = float(input("Digite o peso do pacote em kg: "))
if peso <= 5:
    frete = 10.00
elif peso <= 10:
    frete = 20.00
else:
    frete = 30.00
print(f"O valor do frete para um pacote de {peso} kg é R$ {frete:.2f}")
