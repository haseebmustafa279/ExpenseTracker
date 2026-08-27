from django.db import models


class Transaction(models.Model):
    TRANSACTION_TYPES = [
        ('income', 'Income'),
        ('expense', 'Expense'),
    ]

    title = models.CharField(max_length=100)
    transaction_type = models.CharField(
        max_length=10,
        choices=TRANSACTION_TYPES
    )
    amount = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )
    source = models.CharField(max_length=150, blank=True)
    transaction_date = models.DateField()
    transaction_time = models.TimeField(null=True, blank=True)
    status = models.CharField(max_length=50, default='Completed')
    fee = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0
    )
    description = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.amount}"