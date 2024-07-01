#!/venv/bin/python

from datetime import datetime
from model.Model import Base, Model
from sqlalchemy import Column, DATETIME, String, Integer
from sqlalchemy.orm import relationship


class ProductModel(Model, Base):
    __tablename__ = "products"
    __table_args__ = {'mysql_engine': 'InnoDB', 'mysql_charset': 'latin1'}

    id = Column(String(256), primary_key=True)
    created_at = Column(DATETIME, default=datetime.now, nullable=False)
    updated_at = Column(DATETIME, default=datetime.now, nullable=False)
    product_name = Column(String(256))
    product_description = Column(String(256))
    product_image = Column(String(60))
    product_reviews = relationship("Review", secondary='product_reviews')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
