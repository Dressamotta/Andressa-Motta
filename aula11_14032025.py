
numero = int(input("Digite um número para a contagem regressiva"))
for i in range(numero, -1, -1):
    print(i)

    # 2. Soma de números com WILE:
    # Peça ao usuário um número e some
    # todos os números de 1 até ele.

numero = int(input("Digite um número para"))
soma = 0
i = 1
while i <= numero:
        soma +=1
        i +=1
 print("Soma:", soma)


# 3. Tabuada com FOR:
# Peça ao usuário um número e mostre a tabuada dele de 1 a 10.

numero = int(input("Digite um número para tabuada"))
for i in range(1,11):
               print(f"{numero} x {i} ={numero * i}") 
