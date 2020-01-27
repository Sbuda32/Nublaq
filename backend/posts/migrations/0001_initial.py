# Generated by Django 3.0.2 on 2020-01-22 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('body', models.TextField()),
                ('created_by_date', models.DateTimeField()),
                ('image', models.ImageField(max_length=300, upload_to='')),
            ],
        ),
    ]
