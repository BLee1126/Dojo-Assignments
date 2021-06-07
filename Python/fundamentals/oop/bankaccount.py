class BankAccount:
    bank_name = 'GotYoMoney'
    default_int_rate = 0.03
    bank_balance = 0
    all_accounts = []
    def __init__(self, int_rate, balance):
        self.bank_balance = balance
        self.int_rate = int_rate
        BankAccount.all_accounts.append(self)
    def deposit(self, amount):
        self.bank_balance += amount
        return self
    def withdraw(self, amount):
        self.bank_balance -= amount
        return self
    def display_account_info(self):
        print(f'Your interest rate is: {self.int_rate}, and your balance is: {self.bank_balance}')
        return self
    def yield_interest(self):
        self.bank_balance *= (1 + self.int_rate)
        return self
    @classmethod
    def display_all_accounts(cls):
        for account in cls.all_accounts:
            print(f'Account:{account}, balance:{account.bank_balance}, interest rate: {account.int_rate}')


user1 = BankAccount(0.04, 0)
user2 = BankAccount(0.06, 0)

user1.deposit(100).deposit(100).deposit(300).withdraw(50).yield_interest().display_account_info()
user2.deposit(500).deposit(200).withdraw(50).withdraw(100).withdraw(50).withdraw(100).yield_interest().display_account_info()

BankAccount.display_all_accounts()
