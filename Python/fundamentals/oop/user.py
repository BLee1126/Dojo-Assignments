from bankaccount import BankAccount
class User:
    bank_name = 'First National Dojo'
    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.accounts = []
        self.account = BankAccount(int_rate =0.02, balance=0)
        self.accounts.append(self.account)
    def make_deposit(self, amount, num):
        self.accounts[num].balance += amount
        return self
    def make_withdrawl(self, amount, num):
        self.accounts[num].balance-= amount
        return self
    def display_user_balance(self, num):
        print(f'User: {self.name}, Balance: {self.accounts[num].balance}')
        return self
    def transfer_money(self, other, amount, num):
        self.accounts[num].balance -= amount
        other.account.balance += amount
        return self
    def create_account(self, deposit):
        self.accounts.append(BankAccount(int_rate =0.02, balance=deposit))
        return self
    def show_accounts(self):
        for account in self.accounts:
            print(f'Account # {account} : {account.balance}')
        return self
brian = User('Brian Lee', 'blee1126@gmail.com')
amy = User('Amy Christophersen', 'amy@gmail.com')
brett = User('Brett Kim', 'bkim86@gmail.com')

brian.make_deposit(300, 0).make_withdrawl(100, 0).display_user_balance(0).create_account(500).show_accounts()