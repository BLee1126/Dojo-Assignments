class User:
    bank_name = 'First National Dojo'
    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawl(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print(f'User: {self.name}, Balance: {self.account_balance}')
        return self
    def transfer_money(self, other, amount):
        self.account_balance -= amount
        other.account_balance += amount
        return self
    
brian = User('Brian Lee', 'blee1126@gmail.com')
amy = User('Amy Christophersen', 'amy@gmail.com')
brett = User('Brett Kim', 'bkim86@gmail.com')

brian.make_deposit(100).make_deposit(200).make_deposit(300).make_withdrawl(100).display_user_balance()

amy.make_deposit(200).make_deposit(400).make_withdrawl(50).make_withdrawl(75).display_user_balance()

brett.make_deposit(700).make_withdrawl(25).make_withdrawl(300).make_withdrawl(100).display_user_balance()

brian.transfer_money(amy, 300).display_user_balance()
amy.display_user_balance()
