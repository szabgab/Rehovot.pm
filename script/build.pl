#!/usr/bin/perl
use strict;
use warnings;

use Cwd ();
use HTML::Template;
use File::Basename qw(dirname basename);

my $root = dirname(dirname(Cwd::abs_path($0)));

my @files = glob "$root/templates/*.tmpl";
#print "@files";

foreach my $tmpl (@files) {
	my $file = basename($tmpl);
	next if $file eq 'nav.tmpl' or $file eq 'footer.tmpl' or $file eq 'head.tmpl';
	print "Processing $file\n";
	my $t = HTML::Template->new(filename => $tmpl, path => "$root/templates");
	#$t->param();
	$file =~ s/tmpl$/html/;
	open my $out, '>', "$root/site/$file" or die $!;
	print $out $t->output;
}

