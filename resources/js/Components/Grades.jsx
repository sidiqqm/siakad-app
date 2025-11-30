import { IconEye } from '@tabler/icons-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './ui/table';

export default function Grades({ studyResult, grades, name = null }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="purple" size="sm">
                    <IconEye className="size-4 text-white" />
                </Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Detail Kartu Hasil Studi Mahasiswa {name}</SheetTitle>
                    <SheetDescription>Detail kartu hasil studi mahasiswa</SheetDescription>
                </SheetHeader>
            </SheetContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="border">NO</TableHead>
                        <TableHead className="border">Kode</TableHead>
                        <TableHead className="border">Mata Kuliah</TableHead>
                        <TableHead className="border">SKS</TableHead>
                        <TableHead className="border">Huruf Mutu</TableHead>
                        <TableHead className="border">Bobot</TableHead>
                        <TableHead className="border">Nilai</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        {grades.map((grade, index) => (
                            <TableRow key={index}>
                                <TableCell className="border">{index + 1}</TableCell>
                                <TableCell className="border">{grade.course.code}</TableCell>
                                <TableCell className="border">{grade.course.name}</TableCell>
                                <TableCell className="border">{grade.course.credits}</TableCell>
                                <TableCell className="border">{grade.letter_grade}</TableCell>
                                <TableCell className="border">{grade.weight}</TableCell>
                                <TableCell className="border">{grade.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan="3">IP Semester</TableCell>
                        <TableCell className="border">{studyResult.gpa}</TableCell>
                        <TableCell className="border">{studyResult.gpa}</TableCell>
                        <TableCell className="border">{studyResult.gpa}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </Sheet>
    );
}
