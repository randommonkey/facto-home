import shlex, subprocess

print("""
Deployment script to AWS
S3 Bucket: facto.datasketch.co
""")

dirname = str(raw_input("Folder name: ")).strip()

cli = 's3cmd sync --recursive --no-mime-magic --guess-mime-type {}/ s3://facto.datasketch.co/'.format(dirname)

args = shlex.split(cli)
subprocess.call(args)
