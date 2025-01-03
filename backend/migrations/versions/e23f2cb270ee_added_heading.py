"""Added heading

Revision ID: e23f2cb270ee
Revises: 10a0dc7d6058
Create Date: 2024-10-28 12:37:36.789927

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e23f2cb270ee'
down_revision = '10a0dc7d6058'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('question', schema=None) as batch_op:
        batch_op.add_column(sa.Column('heading', sa.String(length=240), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('question', schema=None) as batch_op:
        batch_op.drop_column('heading')

    # ### end Alembic commands ###
