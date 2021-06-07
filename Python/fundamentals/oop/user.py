class User:
    bank_name = 'First National Dojo'
    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdrawl(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print(f'User: {self.name}, Balance: {self.account_balance}')
    def transfer_money(self, other, amount):
        self.account_balance -= amount
        other.account_balance += amount
    
brian = User('Brian Lee', 'blee1126@gmail.com')
amy = User('Amy Christophersen', 'amy@gmail.com')
brett = User('Brett Kim', 'bkim86@gmail.com')

brian.make_deposit(100)
brian.make_deposit(200)
brian.make_deposit(300)
brian.make_withdrawl(100)
brian.display_user_balance()

amy.make_deposit(200)
amy.make_deposit(400)
amy.make_withdrawl(50)
amy.make_withdrawl(75)
amy.display_user_balance()

brett.make_deposit(700)
brett.make_withdrawl(25)
brett.make_withdrawl(300)
brett.make_withdrawl(100)
brett.display_user_balance()

brian.transfer_money(amy, 300)
brian.display_user_balance()
amy.display_user_balance()
