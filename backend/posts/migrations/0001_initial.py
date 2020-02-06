# Generated by Django 3.0.2 on 2020-02-06 08:46

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
                ('date', models.DateTimeField(auto_now_add=True)),
                ('post_body', models.TextField()),
                ('image', models.ImageField(upload_to='')),
            ],
        ),
    ]
