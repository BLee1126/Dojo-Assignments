class BankAccount:
    bank_name = 'GotYoMoney'
    default_int_rate = 0.03
    balance = 0
    all_accounts = []
    def __init__(self, int_rate, balance):
        self.balance = balance
        self.int_rate = int_rate
        BankAccount.all_accounts.append(self)
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(f'Your interest rate is: {self.int_rate}, and your balance is: {self.balance}')
        return self
    def yield_interest(self):
        self.balance *= (1 + self.int_rate)
        return self
    def transfer_money(self, other, amount):
            self.balance -= amount
            other.balance += amount
            return self
    @classmethod
    def display_all_accounts(cls):
        # print(cls.all_accounts)
        for account in cls.all_accounts:
            print(f'Account:{account}, balance:{account.balance}, interest rate: {account.int_rate}')


