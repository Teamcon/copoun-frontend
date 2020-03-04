
const offersData ={
    data :[
     {
         "id":0,
         "name":"pizza hut",
         "img":"https://d1ralsognjng37.cloudfront.net/65ee82df-6c88-4284-8d36-7c104def6c46.jpeg",
         "price":150,
         "discount":10,
         "category":"resturant"

     },
     {
        "id":1,
         "name":"Nozomi",
         "img":"https://media-cdn.tripadvisor.com/media/photo-s/0a/31/6a/8d/front.jpg",
         "price":150,
         "discount":10,
         "category":"resturant"
         
     },
     {
        "id":2,
         "name":"cilicia",
         "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2hmXg-i-GGciWaYNIESRKlUeR1SykQDPbxiHcAZO6lopqoDAL",
         "price":150,
         "discount":10,
         "category":"resturant"
         
     },
     {
        "id":3,
        "name":"The Ritz",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwECBFd4Lwih8SrfEFWddPxb3PV9kIrAX9e-H58-CpY8Zb6Qft",
        "discount":10,
        "category":"spa"
           
     },
     {
        "id":4,
        "name":"salon",
        "img":"https://img.freepik.com/free-photo/asian-woman-spa-salon_1421-3764.jpg?size=626&ext=jpg",
        "price":150,
        "discount":10,
        "category":"spa"
           
     },
{
         "id":5,
        "name":"relax time",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGnU7F_NMp9Bl9IJ058b7qe8FTEc5cUlnsrpgeGsxR--fvts8X",
        "price":150,
        "discount":10,
        "category":"spa"
           
     },
     {
        "id":6,
        "name":"tamimi",
        "img":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAACvCAMAAACFDpg1AAACrFBMVEX/////AADvjBmZMzMzUpZjQpRj5QEAAAChoaG1tLT39vf8/PzthQD/+fn//f5cPJL8x4+4dn2UJyjI0N9uX6Dew8X+/fkkR5CZFhv/entkRKh+ibX/amtW6gDb4cP/0Kp47kYgS99U5v//8fFTzigt4f8PQt7A9f/g5Pzl+/9yke7J7rzmRET7Gx/v+eX49vyq7/3S6cX/MDJGzA57cYqhhGqAamr1ODkAMd5ub4h2nWVWTJVlRp/uUlNXyi7t6vD/q6vuAADKysr3U2CZp/D/ubkYGxz/yMhoTJiQkJG4AADdDBDGvsKxq6785/Dj9Nf0QoMAAB87PUv/TEz/1tbkmJz/gYHT0tJvbG3/xMWEgIJaUVQbKE8lGyNtxR2e3oc2NTSml6GpeYibb2+ldIKhgZV3d4N4g5yhjIGQf4JMS0xhaYxlZXPoi6XlBCb6IlP0Moz2KGz4GT1PU3ApQ21OX5MNIEWzwN2Xn77rU4TGAC7/ET0zOFmZrtdzjMl9kbfyH035SnhEYZ+ituy0ESj6hbJ5mNQgJz3SDx/5v9Jbdq6qFxDkI00rRXnNXYThFTLGjYrfK1XjcYC9tmPNgUTPTFzF75+oXXdWHw4jKx03JybFsMKyiiixbEC78nqs8F/IN2V/by6WbD+GAAuW6TL7QaBvTUKzWWL+QLFqVBBVTxqv8zhohACs41RpqSiAwydUrgCnypGp0jDFzqa2+lLd+K/Jf2P1b6TRakyU11X+kO5YmSJ7sk3bhISNTFSsx2dsjTyyzlIAF10DFEIZMXHzYaG3UFyU6XnVVlr3Zrf0Y4b/3PqhQkb4s4rVSkuFfazxnkz918lCasFEfhMxZBKI0UJpoAB0gmQgPhdUaQC++3BCa+U6NxxjgeZpozV32l0PQJffhZkqRxeeo5STSA8kAAAaGElEQVR4nO2dj0MT6ZnHX7qcEyY7s11ZQE7W7ja7COWXYLt0b2sHULCBJPyKBAiEYHdxRYVE5YcUkV+SgFCMPend7h1sz9i1pQbs4nk02r2rWKl7ta1Au6ftbtv9R+55J5NkJj9RJpAoXxSSmWFm3g/P87zP8847E0Rg6bVyuYSnxoMHD373nXfePvj22wffOfhd/qrapqYm+dHqpkNNgt8IUzW96ZL8627J/8mtd77h0ruH33BJLm/Ws2wQ5lNbe+TwUQ2SOoWOtWS05LcajK3G48fhm8q1RkqeOFnXdmR7W3vH9k73L4SttidEc0qI/c63nPrHHS9vceqVrzz/JU7Pf/nFbc9x2hZHFshr9Q5Cennz1zubgZBTFDrV1VvSEnW8NSrneEbG94xq5xoakUdOnmzr7jl94nTPGRT+4hN66YV/4OSf0FY3IYTIGHkRJgSACNNJbbeA0Ph4iTknKqM343tlfWBD7kNS1aa6/kNHOk8PjHQAsHDXmgghVCDXA6HaihPVRXr9+02u3VKywZaSkpKM/JLW3oyc3tGzMvch6UOmtv6BjqGOniFm3dv7+FobISlS1BKoWVtfX6EnTHqJe7+qweKSlnFzSUlLa35rb+8w75CUort/pGdgYGTk9Hq39km0RhtCpFyPtEUEfBUdOuEyCZrOOldcbC5uMQOmltFRIyU4aGfd2MjQUP8Zcn3b+mRaKyGkaUbV9UR3x4n6jgq300izvg+ESszm0a7x0dHRYx5HLdjeP3byTNb6NXMNWjMhUo603UWmzjeJo0ddNkGTO85vMxeXFBf3Wsa7zBeEJoTikTQ2Nla6nu18cq2ZkFSO9OBiRAXRzYu7sh/889ZBcDNzV5e5+KKKpnl9Fj1RGv49mFtrJoQk6J0f/su/vqdkSD6F9//t37cOnrtUPFjcdUsm6NPjJ6foZ43QLw2GD455NJp840f/sXXw0qVtgy8K1tBpc9aJdWqbOBKFkPHy5cvDHjvW/BgQffjhi3H8cEOXTlqt1ux1aps4EoVQ65UrZWUq4Y5phfYnP/2GCvf8jgUUFZ85aZ2etk5ESIjmJAahH142GI2Gs5Qg3FBIc/jHP/nZ1cnJh5NTDx8+nALpdLaZybSNaOYaJAaht69cNhgMZZ5+hmTKN2zTVh34lXXLlt2zszbbx9eyI6ASE0ocL/ue4bLReMzLe2SKd38ObjVlnZqYuHYte0dmfKThQSLZkLH1uMHYeory3j3z0c+nrdNzc9OT10vhLU2hZ9OGWgyGfKORN8KBQahUOEhnffTzGR3LaPphaUTlQU6J09v3trS0Go2uQEQjzX/eMFguyAAJM2GdmbFapx7OTVsnJzI3qJlrkCiErlwxlhkMxrOuvar/a5vxiiFjEWfTmqszNqtVZ5ufAjuaizxEohA6Pm68PN7acsrlZgfO5V/+xS8MJQeAEJW9YrdPT6/YbDfn5yIrnWYlThxq6R0vM45aXISOjZcYe88Ol9yC1zQzOWOfmZtbWbFaI9CExCE0brwybjEaXWl11rGuypL8e/fyC/E76iOwn5kVcLG5qdKNaeVaJAqhYjOYkMXo9rLh+zktJfn5nFHt+Ni2ZLv50bxO1xC/EW1cm0QhZB43j4/yU0bVrb25uePOLDvzY5vNNoEysyNrYIiTKITOmS0Wc6+RV3ao9uflDbuub2TfnLdNQj797OZD5q6SwdFxg9ofgPgG+3/bIq1idUqcODRqsRhHz/of1Sj9n5u2hvVpkOgSg9CPBwcHuywQdfw6EXXtM9t8BPb0WGIQemPbxb8dU6sCHab0pm0+AvsxLDEISRhZwGNA1hh/syFCTUgcQsEPk40zoUjsycQkRKakZPllkL1jPRoTEolDSIpSDpX/9UHPIX+TOSIyE3JIJBtS/mrhdErKQHRPJMx3eTyJQ0gWPdY/sH3kdM/QGR9DsZEtcQgpEvqje04umIbeau/c0OaEQCIRKq9LODLSc3Ks88ihDW1OCCQSIaI9+tDpgf4jsSMdG9qcEEgcQpryuuix7UNtnT39m4R8EmL05XXtdbfPnB7qid3Q5oRAIvX2jUSRaSFhYSHhqQvUYhFiqk2329vrFro38yF/VQeprH2zogJy6shNnv1IzMqVJCO5uvCn0NT2tPPfUyARCWEmMko1rB4eliH6qbEmMW0oa/hCWVkZnkp0Y1j9tJiQmIQOjBpbx1sNFqBkLDOcDTgq+/jibNKNnaLW508gIqGL+S29lvE+Y2uZsa/v1J1jIlf5NLs/SqYuzLuVmLRnb+L+9RlGEJHQ/ZKMcUPZaF/faJml7NSdO6IaEWsvUnVeUk5GFFZloQpsaD2sSDxCWc/hy/cGQy4YUFlf2Z0bwYb3H1fqvNwoTjn72SX0ejiaiIQuFg/mtJiNowaLpc9y+c5ZsZyAZm1lf1KUS1XrOR1SxJH8Dy9tM28zj/ZajGVlFov35OEnFbYUWZWbT1TeuvaSItrQi+cGLz03brFYIA719d0QLwzRqDCHByiRnUm6bhIxUv/afG7raJd5FIJQ36kPRDMhAMQ3oKhKRNERSihu26Vtg12WLkuZwfLBDZFuQASHohL5gKL2i7Nj4VECVAAiEiK/e2nbtq7RUYhBZaJ19WAtAguK2huSIBTAKMUjRCHFc0BovAuCkFG8MO0BKKpQrD2vVmLWZXTj1q5x8DNL3wFKtN64UAgoQ+RixiFZgNMVdfSDOfz99Isf3LsgkgXhs5blCAnlip2H0mxXGSC4iUqIIlXDB4ZVYjUCx89bQkBRlWJ3Y7C/PIfz+jGjkIygieRhkCmqMkJNCLJRfAyz3wH2dZo/9KTK8wAUlSO2l4HUe6IWNX7XBid0dyMJVXoSilIH+xXWgCnK29ZkVVVVeV6LaZRXpTqvSapBPn4FKwihqbTS+A0kpPICFJUX7HfAN6n9yCvtpmnsTTlezkRBNrFXnYEjke/g4JfQyy+/0pDNTs7cQEKF3oQqg86ZxFWcr+bibjHXi1AN3mk+/u/HOv0ResV9h8Fj9GVih9Eqb0KsEfntCmCFDA+TZNQIFzoTBzch9lxhsfRAPkSh3Kh8Jfk4XvYWw7tnd7WEVMf6kg6I+zyYJB+EcsCD/P4lKCRjh9nM510UHSOR8CscIRonEeqqPUlVNaxLosIPGaRaVCA/w3H+CPE2WSUh9WjJ5d/03hMz56VzfRCKSgyUTbCAMhpTedc2WUDw1mlD8GoP57FqhJN/aYD9UXRnQoI4hLK+X9L7m1+UHT/rfZQnlswzG3IoUGmG/TIdzz9xEcIWk8e6n9PLKFcPWSlzjGCqkxITfafVNCWN3R6dIAYhlaW3q+XeJxfuiehnfghl+O/xaWwd6YlJVXm8bQozojAiByEgwiZZi4sl8L3KEaTwkgP+d8qcYRmtkZD6vjnXfG/4glgDQ1h+CGFEno5Bs6GXQntcG1VRiLt+hN+p3TYkxdHtfCqKw3ty3K0ThBBCZEf/XxPWakN9ZrM5t3Kv5wO91iJ/hKIy9gsROS56yGQ0XeP+lSTnJrccb5yEZJWOIQIK3uc7HrsVmBDCj8TL6hh5LEJbt56L4zzdSegGBlQpaqT2Swj6fEF3hoOJuir3AATWuFsXFy9czHXYjeMMcXEHZicgFPd4hPCOyFjmO6sjtBX0vx+ed2ZuHCEqrq83fe8p8Yankb++jLMQPiIAhNufxLpaKohJcrUZ6IHr5e93xSEq6fFtiGb/U6shdOnS1uduxcUx7qzN2dvLPhk+Nizy+JavfMipHDXbhzubgC2DV5Lgse3zzsbhDq6GJYKDvDqH2xL456e6jhOQkEM8Qt/6hOfmfELnz8d5QhDMjnkCCoHkK6d2ByN+acGN1iYlViWCqnDAztDwd1PooJaTmMiOyWUkXriAbYjdGsPNVwQ/HSehF1544S3+bLsv8whxZ8MXr+oQfc5QTSBCHomR2nPtLe58aBZNHESqHB/7cG8dXCwhwPPS9g5Gyku4ZL/90vPPuwl5Vs0hrFxpWWBCOM1x/1Fq8vmr8l8kuYKDprA7ASGkanGsa7nvuaP8F1NX8dcFQoCnM8XjWaQ4G/3K71lGnA0JFTpC8LcIFIg4RO7tNX9bTL9//356+p70xVtxqY49cBniItsqsubCnsXF84w07gJs5tLiLcWqns1GvvQ7MB7f6+JZRutNiA7mZh6jOlLSJUc72HWs+73PbYLXOX96bh38hFg8vo0Nero//B4T8l4dQkL8Esqf1ILtZXjWQ54r5c7LKyxkI3g6yYUkxwik18yj1U+z8ceHXfGH337Zx8XJkBIKbkQZ/GtdqhwoRqvcVy6c17NbNKJ0s6voiXw96S2k49SIDhaJcOroPCv24lqGw/nYPyVH6P4qevIQKrSEULDuzN2hQSQ4AL3SeXDMRS7jPTCen1+Sfn6D7xQIsQ15XxDy8jOVo1PH3wrHFYjZ8+tUmstJSEbDpG70xGUJOjj8OKHucYQDYHA/S3RuDZun4jFDqZMJP+feOEnQDw3HhHmkY2BYFCGujgootXjHCwVJIFRmEJb0+I+ZlySGqvAIglc94akq2CZRFIVk7g0QOt56R+U16Be/ZtFqFM+aZrAuP0NGU2s/HHvIEBHq7esTc2iRk6zSFWEK/Q+lscoT/+giCttQ3ykRp746hS+4OobpaLQ/MKIk0Q8upiTobcONO/fE92BVev5F7iXtNdNKqJyQzEwTSzhS3+m7EXROxuMJx59MDa+ilAXs9EMxQVY0gQ2NGsvWMEBN49FUXKXKuKs37A/I+fIS+dipQKlj3pqaEGJJ0C/7RvvueYbqVd+4I6+VxsuSEmV5lTmVeUhWBT+q2Cw5D88u5ysAoipx2hIa4U+juNx3z9OGaJpRruZzgQoIQukeKHNe3MDDPkls4c5Xjd94nRTOd0Ti51P33Rj2mtZDagk5+0J47c97My2D9no1Wc0W5kJClP8ubY/IjRJVQMhyzEe2rtETWo0Ggi2UDqRCqdQgRoMtS4MKYjSwWhmDbz6X4qXsteSWW4n5uLH3D1yIYsc0vAgh/+l1mNvQOyofA2tK/GFCoGoIwkr2lZYgNEhKEM146Rt4iRIQafBSIJTBODKgpFT26k2G2ichf7EozOOQz9EPCUeoWQqwHCoiYhBDFBFuKbk4tMeR9OGkB4/NY0up8UnI6yYGTnkhb+Ya5IcQKSkiKuRyCYPASoimgpgKYKPAhIoalXqC0CvAsvQsoRhMaC9yEqLYOmy/bxuiZT6vVId5PuR7BI3UE9XsCznBhmx4z9oQUYtdEF6iWoJgfBByRBs/hCiffpajCufHrwUlpCWK8KwdBxYgBJsrCKKAReefkG8v4yb9RlRXFpxQNaH3QUjxZIQceZJ3GArnh2gEJVTLRmSEmh+LkB8v8zlwHZpbqkSTX0LNhL5AU6tgI7VEo9FyfZkvQnuFhByRusonIYT2R1ZfH+Bah5zt2PUk94LgESrwRYimhTbkXXU45E1I5HEFseWPEE3i1BC6MSklZwlV4NyQYV2OTRNxYGJzAQU64OjlwbHwvQO0LD0qXYbnciz62rEXoTA3If+EEBlTKy9gn/GikVTXxpAFClhYoJTSNK0AE6KkygJ8dyy8lMbFSfGlU6YGT2KhadUlPEsyrsZnH+45ap0hC+MojQWEYk93pODGBE9KuMtYtPc0JIGU4Iquq4See/C8HaYmnGsyLAk6WjcyNDCQEmxDkiHxJ5qSGgZPUNbQNMlQNInnHDAKDclADUuSeGqXJkbDEmIY37cTeNQdeev6BIcnkQSdGBoaiY7u6QiYk1CoWt8M/X8MpNa1OHprIA3QQLLE0PJ6XNYWSLXNekJCQ3JA1BMSqrqovtp7gIliJ2gKglDYP1AMCD14MBA7FD0U0IpoyK2hplcQRdUYVC3EZy0Q0hIMdGnVwCiGrMdpgYSor4UtlXKi2jnAxN8L5TEAEu5RGgsIJXQfGRroT9geeExRSyhlZDXRWKAoIjROQmBDRL0GD7dhQhoyvqgI/K6JUNYS1crDPm7PlfJT6gz/tziHkYDQW3Wm7raT/SOBH+gJ5gJppB5bCo9QkYbQIhJJMKFmErKBZrCTGELCQK7wnte8H2FGXel9f0c4Cgi9NFJuquh+qT/wU3MxEAo8J0Z5WCJ1eVkRQ7zH4OLNQQjhIRIaLC2mEShWe+2E39Xje1sig9CRuiP9pu72B/2nA2xGs0Cg3iiqrYaksYCoh2hTBIbCQGiu1RNOQjEQtcHMJFqi/j2i0XMvPAtKlDkmz4Q/Iwnq7BkxjZnqHgT0MhocikFSGufXWtgQfjZXE0UVeoZswsUJoSCbtVLwMImeKNIWxTBNzc1yynlJ0TE3U+3q6HOr/H6MU/gJ8qG2v0RHm+oWtge+tYxx3EWAkx8MjIG8SAN5EB6rjlGQGsiHGPZODaYAltLsY2bdN6sCIVUVNzKUU1UoW9/nWK1NEqQvbx8bM5nagzzenHeNkb2X1/XemWi7F9Dc9FveHDJVVU5O7t7EqryasB5P9CUJqihvNy0sjHWu5gKiQ7Trm9cK4cQ69zsq3Ksv/wIvO9ld17Y9JmJbEGrhz57SsLVWRCQnG6AQz6d+CrRJKJg2CQXTJqFg2iQUTC5CpWlp2ZFQJq27nISkDTad7vomIW+5nr48r5uxWjM3+GzCURwhOlsH2jJBx2duUhLKaUOZKzrdrG7l44/nNg1JKCch5qZVNzs7a5+16SY3+JTCTE5C8WlWq86+tDRjt05t8CmFmZyE6B0rW2z25dmZJevDDT6lMJMrH8q8uXvJvvRHq906sbFnFG5y2VDmTd2ybRlcbTMOCeW2oXnrkn152mrdUorfQYZdujlkhMXzMuvSkm3aunuKhrA9ZV2Zn5oIzW2RESb3Jwnc3G1bmpneYr2Os8cV0Pz83fiNPbmwkJvQx9DbT09vmcqeh+zaNt9wLS3to01C/Kd8pVlfm4UwNGmz625mZ8bH05uVPiv3+FC2VTczbcWlB4Ro6Sqf6fMMyFm50oi5+seZmdlZ3dKfmrWNT98Huz6xMCGHN2XOz9js1qXl8nJTeXnbU/fxyU8sCapl2IhDgw0tzyybFvrbRkZG2sZiN5MhhySookKCL0jTmqs/m/20vH2hf2Fk38DQ7TbfjkaL+5DvCJAENVecaMTNLrD936eEaSwhoad/zDQ0ctvXp3DHp2VfL13vUxRTj/Hhje6nnmqbT1THSlG84qfNBc2muoX+6IU6YqSnrs2zO6NL0xrmJievPyPe5yb0u+4jJ2oZFP/un5Xk0fK6uui6/iPl5T1tJ4VuJqUnrFbr3Nz162nrf7ZrUVYKX1yQSBXIsSxTIJcdSJCeIIhyDdL8SE+h2vL2Bw8SenrG2nvG9MLpMnT2ilVntT68PjcVUX6W8uibfCUP4IVffV2gXbCIatgtUIOznpCg+kO/69Yq0Dd+2oiQsrwuOrp/pKetf6D7PeFUqPhJ6ytgRA8np+cjagBpX/KrnJLxq+RHsGzn618VCqwoe/drQjntQIKK3uww6d+I/9Ofwas00JctJEQ/6O/pL68VHmkHGBAweghV/+eRNNb/NSeh5EcdKSl/SX4V/GyXX0LwDRsQfpnN7QB6e+JEOaFFjAY/3qSpHGJ19F/6HyxUeDhZg05n3WKdnoSiP6JGIZ2Ekh/hyLLPg9DrAkJ30zh9LiCkJyoqvn6UcsyxIt8k2hcSxhbaTcLnaNKlOismZL06s7IyNR9BNb+L0ACiOwY8bWjnLh6hbzscK74hO/u1177tJqR9r6K74k3nDpnG7vL29vZuj/n01ATG85puekX32cr8fAS5mcvLUlDKq/i1g9DrwOb1r0JCk+pBSIpKX24QEqrXa016pXuXjLLp6CHGY748dde6RQd+dnXG+tnKyvxE5JT+HKHkZCCU/M1kF6FdKHXXTsRFbTehzLsNmdnxQkJ6osmkDVbLZ65sATcD2VewDU1GjhE5CCUPDGShrIEOl5exPTzWLr4NNWTe3b37LlQOAkLNRIVCcMuur5w5E6IQviZrs9ttmFDkBCKOEJcp8uIQlyfy41Dm5yyhUg8vO3pCGbSOoHdAGAIDstrtdhypI2gAmyPEYERZ5CMXodd3sfdQ7hQQujuR+fnnpQ0ehGpX8dmGdNqW3QBo1rq0tIRtaCrSvOzVR2ykftUVqXE/Bu3ickcXod0NmZkNuz0IrWaWXnwDDkGzV2ftS3bb/Pz8hHifiRtqCfoyPqGdqak7hfnQtzPTGljhOMTLhyS8fon/1Hr4F9sBX1nwkryre23Wbp9Z1tltnwGhCCpe/RICOq60iMsYwYAyS7HuuglJwcvY8TPcuWdhX3Ve4KBR7Jt/fQDaHiuFsk63e9auW1qGUI0JRY6TBSDkXXW4ylZe1SE7jJoL8AsaDf9t8eK9YfdtTcrysYGBnoGhhV9BspS2RWfXzS4vQWcPXhaJVQdHKPlV5LtyLfWoXHdzlauiGenlbAV2bLDrNwbz+LDT0RhTwoOhsbq2kYSFinggNAtetmRfXrHZ5hsiyIRQyqNkh3DGCOX9Plgm9TH6Ib0rBMSNfpASPSJqcUItsxSP3+lLN1scj7oBH7v9teiTY93E2L6E2xK0A1KhT5eX7UsrYELXNqy5TyJmYB8rBjHw3XHPvHQnX47MKD47jadsLp+JqSUQoZfEIPTJuZLic4P37xc7nl0pRTG3H0S3D/SbyodGblfTH80uLf99+e9LYEG2m5GTDK1ZSokeCAEiJaM+d6548MOt6RwhRDcBIdOZ022mgYExLdlgX1peti0t64BQBHVkaxSjxE/FQ/hGXrmkceul4nMWS/GgiiRJhiSzjt5eSBhrb+vuT9kXXX/Ntly0/OnSzLLNZrtGPiPSKCVyPESN2Mcv6aslMe9iKWNilJJOiRLWNna+Lwd0nZ2N8i/w1xcS+PriC9jimZBSUq1n2fw/4MbH02r/7NMAAAAASUVORK5CYII",
        "price":150,
        "discount":10,
        "category":"grocery"
           
     },
     {
        "id":7,
        "name":"hyperband",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ7BKi8tHbwyByaDABPD-GAiZY85wR6CdR486HuEu1Mou9Aviu",
         "price":150,
        "discount":10,
        "category":"grocery"
     }   

     
     



    ]

    
}

export default offersData ;
