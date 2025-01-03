"""Fixed category

Revision ID: 9a4d249bd8c4
Revises: 00d507a41838
Create Date: 2024-10-11 14:06:09.740092

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a4d249bd8c4'
down_revision = '00d507a41838'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('question', schema=None) as batch_op:
        batch_op.drop_constraint('question_category_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('question', schema=None) as batch_op:
        batch_op.create_unique_constraint('question_category_key', ['category'])

    # ### end Alembic commands ###
