#!/venv/bin/python

from datetime import datetime
from model.Model import Base, Model
from sqlalchemy import Column, DATETIME, String, Integer
from sqlalchemy.orm import relationship


class Users(Model):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

    def get_user_name(self):
        return f"{self.user_name}"

    def change_password(self, new_password):
        self.password = new_password
        return f"{self.password}"


class Customer(Users, Base):

    __tablename__ = "customers"
    __table_args__ = {'mysql_engine': 'InnoDB', 'mysql_charset': 'latin1'}

    id = Column(String(256), primary_key=True)
    created_at = Column(DATETIME, default=datetime.now, nullable=False)
    updated_at = Column(DATETIME, default=datetime.now, nullable=False)
    first_name = Column(String(256))
    last_name = Column(String(256))
    email_address = Column(String(256))
    user_name = Column(String(256))
    password = Column(String(256))  
    purchase_history = relationship("CustomerPurchases", secondary='customer_purchases')
    role = Column(String(60))

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class Staff(Users, Base):

    __tablename__ = "staff"
    __table_args__ = {'mysql_engine': 'InnoDB', 'mysql_charset': 'latin1'}

    id = Column(String(256), primary_key=True)
    created_at = Column(DATETIME, default=datetime.now, nullable=False)
    updated_at = Column(DATETIME, default=datetime.now, nullable=False)
    first_name = Column(String(256))
    last_name = Column(String(256))
    email_address = Column(String(256))
    user_name = Column(String(256))
    password = Column(String(256))
    role = Column(String(60))

    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class Admin(Staff):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
