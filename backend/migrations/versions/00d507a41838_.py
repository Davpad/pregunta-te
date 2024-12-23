"""

Revision ID: 00d507a41838
Revises: 
Create Date: 2024-10-11 13:02:56.586601

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '00d507a41838'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('question', schema=None) as batch_op:
        batch_op.alter_column('option1',
               existing_type=sa.BOOLEAN(),
               type_=sa.String(length=10),
               existing_nullable=True)
        batch_op.alter_column('option2',
               existing_type=sa.BOOLEAN(),
               type_=sa.String(length=10),
               existing_nullable=True)
        batch_op.alter_column('option3',
               existing_type=sa.BOOLEAN(),
               type_=sa.String(length=10),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('question', schema=None) as batch_op:
        batch_op.alter_column('option3',
               existing_type=sa.String(length=10),
               type_=sa.BOOLEAN(),
               existing_nullable=True)
        batch_op.alter_column('option2',
               existing_type=sa.String(length=10),
               type_=sa.BOOLEAN(),
               existing_nullable=True)
        batch_op.alter_column('option1',
               existing_type=sa.String(length=10),
               type_=sa.BOOLEAN(),
               existing_nullable=True)

    # ### end Alembic commands ###
