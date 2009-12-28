#!/usr/bin/perl
use strict;
use warnings;


use HTML::Template;

my @files = glob "templates/*.tmpl";
#print "@files";

foreach my $tmpl (@files) {
	my ($dir, $file) = split /\//, $tmpl;
	next if $file eq 'nav.tmpl' or $file eq 'footer.tmpl' or $file eq 'head.tmpl';
	print "Processing $file\n";
	my $t = HTML::Template->new(filename => $tmpl, path => 'templates');
	#$t->param();
	$file =~ s/tmpl$/html/;
	open my $out, '>', "site/$file" or die $!;
	print $out $t->output;
}

