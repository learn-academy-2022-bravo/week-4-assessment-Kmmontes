# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN


# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# # Expected output: '7 is odd'
num2 = 42
# # Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_or_even(num)
    if num.even?
        puts "#{num} is even."
    elsif num.odd?
        puts "#{num} is odd."
    end
end 


p odd_or_even num1
p odd_or_even num2
p odd_or_even num3

# PSEUDO CODE
# First I added I defined my variable with def as I would every method in ruby called odd_or_even using snake case
# then I add a (num) parameter since I will be passing in the above numbers to my function/method
# then I use a conditional in order to access my parameter for allt he evn number using even? in my num parameters so I can get back only the even numbers
# then I ask to be returned or aka puts my num and I use "#{num}" to access my numbers and turn them in to a string interpolation
# repreated the same steps for odd numbers
# I am not sure why I am receving a Nill value after each value




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowels_removed(string)
    string.delete "aeiouAEIOU"
end 

p vowels_removed album1
p vowels_removed album2
p vowels_removed album3

# # PSEUDO Code 
# I first defined my function as I always would and called it vowels_removed to get back my new string with vowels removed
# then I simply called the string in my parameter, used .delete and "aeiou" for the vowels I want removed
# I included capitazlied AEIOU in order to ensure my capital A vowel was acknowledged
# I printed all the vowels and everything returned as expected



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome?(string)
    if string.downcase == string.downcase.reverse
    p "#{string} is a palindrome"
    else p "#{string} is not a palindrome"
    end
end


p palindrome? (palindrome_tester2)

